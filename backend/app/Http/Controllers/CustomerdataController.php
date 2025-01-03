<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customerdata;
use Illuminate\Support\Facades\Hash;



class CustomerdataController extends Controller
{
  //
  function signup(Request $request)
  {

      $alreadyemail = Customerdata::where("email", $request->email)->first();
      
      if ($alreadyemail) {

          return response()->json(["message" => "Email already exists", "success" => false]);
      } else {

          $res = Customerdata::create([
              "email" => $request->email,
              "name" => $request->name,
              "password" => $request->password,
              "phonenumber" => $request->phonenumber,
          ]);
            return response()->json([
              "message" => "Account created successfully",
              "success" => true,
              "user_id" => $res->id
          ]);
      }
  }
  


  function login(Request $request)
  {
    $res = Customerdata::where("email", $request->email)->first();

    if (!$res) {
      return response()->json(["message" => "user not found", "success" => false]);
    } else {
      $realpassword = $res->password;
      if (Hash::check($request->password, $realpassword)) {
        return response()->json([
          "status" => true,
          "message" => "login Success",
          "user_id" => $res->id
        ]);
      } else {
        return response()->json(["status" => false, "message" => "Password incorrect"]);
      }
    }
  }
}
