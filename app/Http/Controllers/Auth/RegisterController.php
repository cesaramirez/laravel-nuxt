<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'email'    => 'email|required|unique:users,email',
            'password' => 'required|min:6',
            'name'     => 'required|min:3 ',
        ]);

        $user = User::create([
            'email'    => $request->email,
            'name'     => $request->name,
            'password' => bcrypt($request->password),
        ]);

        if (! $token = auth()->attempt($request->only('email', 'password'))) {
            return abort(401);
        }

        return (new UserResource($request->user()))
                    ->additional([
                        'meta' => [
                            'token' => $token,
                        ],
                    ]);
    }
}
