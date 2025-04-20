<?php 

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: GET, POST, OPTIONS ");

header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-API-KEY");

define("API_KEY", "juiyoit35tigy23hb");
if($_SERVER['REQUEST_METHOD']   === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$headers = getallheaders();

$receivedKey = $headers['X-API-KEY'] ?? '';

if($receivedKey !== API_KEY) {
    http_response_code(403);

    echo json_encode(["status" => "error", "message" => "Forbidden: Invalid API Key"]);
    exit;
}

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = [
        "message" => "GET received",
        "status" => 200,
        "dados" => [
            "nome" => "Uga",
            "email" => "uga@caverna.pedra"
        ]
    ];

    echo json_encode($response);
    exit;
}

http_response_code(405);

echo json_encode(["status"=>"error", "message" => "Method No Allowed"]);


?>