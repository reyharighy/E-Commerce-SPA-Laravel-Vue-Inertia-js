<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostalResource;
use App\Models\Postal;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register',[
            'postalList' => PostalResource::collection(Postal::orderBy('id')->get())
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users,email',
            'password' => ['required', 'min:8', 'confirmed', Rules\Password::defaults()],
            'address_line' => ['required', 'string'],
            'phone_number' => ['required', 'string', 'min:11', 'max:12', 'unique:users,phone_number'],
            'postal_id' => ['required', 'numeric', 'exists:postals,id']
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address_line' => $request->address_line,
            'phone_number' => $request->phone_number,
            'postal_id' => $request->postal_id
        ]);

        event(new Registered($user));

        return redirect()
            ->route('login')
            ->with('message', 'You have successfully registered a new account.');
    }
}
