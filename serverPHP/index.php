<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$config['debug'] = true;
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$config['db']['host']   = "localhost";
$config['db']['user']   = "profycar46_djt";
$config['db']['pass']   = "DJT000djt";
$config['db']['dbname'] = "profycar46_djt";

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
        $db['user'], $db['pass']);
    $pdo->exec("set names utf8");    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->add(new Tuupola\Middleware\CorsMiddleware([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "headers.allow" => [],
    "headers.expose" => [],
    "credentials" => false,
    "cache" => 0,
]));

$app->get('/', function (Request $request, Response $response) {
    $sql = "SELECT * FROM `subnavitems`";
    $res = getQueryDB($this->db, $sql);
    //echo $res;
    $result = json_decode($res);
    echo json_encode($result);
    //$response->getBody()->write(json_encode($result));
    //return $response;
});

$app->get('/sub-nav-menu', function (Request $request, Response $response) {
    $sql = "SELECT * FROM `subnavitems`";
    $res = getQueryDB($this->db, $sql);
    $result = json_decode($res);
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->get('/nav-menu', function (Request $request, Response $response) {
    $sql = "SELECT * FROM `navitems`";
    $res = getQueryDB($this->db, $sql);
    $result = json_decode($res);
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->get('/pages', function (Request $request, Response $response) {
    $sql = array();
    $sql[0] = "SELECT name, link FROM `links`";
    $sql[1] = "SELECT name, link FROM `navitems`";
    $sql[2] = "SELECT name, link, parent FROM `subnavitems`";
    $result = array();
    for ($i = 0; $i < 3; $i++) {
        $res = getQueryDB($this->db, $sql[$i]);
        $res = json_decode($res);
        foreach ($res as $data) {
            array_push($result, $data);
        };
    };
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->get('/links-panel', function (Request $request, Response $response) {
    $sql = "SELECT * FROM `links`";
    $res = getQueryDB($this->db, $sql);
    $result = json_decode($res);
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->post('/check-login', function (Request $request, Response $response) {
    $data = json_decode($request->getBody());
    $sql = "SELECT * FROM users WHERE email = '$data->login'";
    $res = getQueryDB($this->db, $sql);
    $res = json_decode($res);
    if(count($res) && $res[0]->pass === $data->pass) $result = true;
    else $result = false;
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->post('/set-user', function (Request $request, Response $response) {
    $data = json_decode($request->getBody());
    $fields = '';
    foreach ($data as $key => $value) {
        if($key !== 'id') $fields = $fields."$key='$value',";
    };
    $fields = substr($fields,0,-1);
    $sql = "UPDATE `users` SET $fields WHERE `id` = $data->id";
    $res = setQueryDB($this->db, $sql);
    $response->getBody()->write($res);
    return $response;
});

$app->post('/get-user', function (Request $request, Response $response) {
    $email = $request->getBody();
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $res = getQueryDB($this->db, $sql);
    $result = json_decode($res);
    $response->getBody()->write(json_encode($result[0]));
    return $response;
});

$app->get('/users-list', function (Request $request, Response $response) {
    $sql = "SELECT email, rights FROM `users`";
    $res = getQueryDB($this->db, $sql);
    $result = json_decode($res);
    $response->getBody()->write(json_encode($result));
    return $response;
});


$app->post('/check-adm-pass', function (Request $request, Response $response) {
    $sql = "SELECT * FROM `admPass`";
    $res = getQueryDB($this->db, $sql);
    $arr = json_decode($res);
    $sendData = json_decode($request->getBody());
    $result = false;
    
    for($i = 0; $i < count($arr); $i++) {
        if($arr[$i]->login === $sendData->login && $arr[$i]->pass === $sendData->pass) $result = true;
    }

    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->post('/registration', function (Request $request, Response $response) {
    $data = json_decode($request->getBody());
    $sql = "INSERT INTO users (lastname, firstname, patronymic, age, country, city, email, pass, rights)
        VALUES (
            '$data->lastName',
            '$data->firstName',
            '$data->patronymic',
            '$data->age',
            '$data->country',
            '$data->city',
            '$data->email',
            '$data->password',
            'user'
        )";
    $res = setQueryDB($this->db, $sql);
    $response->getBody()->write($res);
    return $response;
});

$app->run();

function getQueryDB ($db, $sql) {
    try {
        $stmt = $db->query($sql);
        $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;		
        return json_encode($wines);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
};

function setQueryDB ($db, $sql) {
    try {
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $emp->id = $db->lastInsertId();
        $db = null;		
        return json_encode($emp);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
};