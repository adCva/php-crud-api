<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:  GET, POST, PUT, DELETE');
include "DBConnect.php";

$db = new DBConnect;
$conn = $db->connect();
$method = $_SERVER['REQUEST_METHOD'];




switch ($method) {
    case "GET": 
        $sql = "SELECT * FROM users";
        $urlPathArray = explode('/', $_SERVER["REQUEST_URI"]);


        // GET Edit data & GET all data.
        if (isset($urlPathArray[4]) && is_numeric($urlPathArray[4])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":id", $urlPathArray[4]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;

    case "POST":
        $newUser = json_decode(file_get_contents("php://input"));
        $sql = "INSERT INTO users (id, name, email, mobile, created_at) VALUES (null, :name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        
        $createdAt = date("Y-m-d");

        $stmt->bindParam(":name", $newUser->name);
        $stmt->bindParam(":email", $newUser->email);
        $stmt->bindParam(":mobile", $newUser->mobile);
        $stmt->bindParam(":created_at", $createdAt);

        if (!$stmt->execute()) {
            $response = ["Status" => 0, "Message" => "Failed to add new user."];
            print_r($response);
        } 

        break;

    case "PUT":
        $editData = json_decode(file_get_contents("php://input"));
        $sql = "UPDATE users SET name = :name, email = :email, mobile = :mobile, updated_at = :updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);

        $updatedAt = date("Y-m-d");

        $stmt->bindParam(":id", $editData->id);
        $stmt->bindParam(":name", $editData->name);
        $stmt->bindParam(":email", $editData->email);
        $stmt->bindParam(":mobile", $editData->mobile);
        $stmt->bindParam(":updated_at", $updatedAt);

        if (!$stmt->execute()) {
            $response = ["Status" => 0, "Message" => "Failed to update user."];
            print_r($response);
        }

        break;

    case "DELETE":
        $sql = "DELETE FROM users WHERE id = :id";
        $urlPathArray = explode("/", $_SERVER["REQUEST_URI"]);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":id", $urlPathArray[4]);

        if (!$stmt->execute()) {
            $response = ['status' => 0, 'message' => 'Failed to delete user.'];
            print_r($response);
        }

        // echo json_encode($response);
        break;
}