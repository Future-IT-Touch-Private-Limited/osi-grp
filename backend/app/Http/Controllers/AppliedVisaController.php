<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AppliedVisa;

use Carbon\Carbon;

class AppliedVisaController extends Controller
{
    public function index()
    {
        $appliedVisas = AppliedVisa::with(['user', 'country', 'visaType'])->get();
        return response()->json($appliedVisas);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'user_id' => 'required|exists:customerdatas,id',
                'country_id' => 'required|exists:countries,id',
                'visa_type_id' => 'required|exists:visatypes,id',
                'applied_at' => 'nullable|date',
                'status' => 'nullable|in:pending,approved,rejected',
            ]);
    
            // Create the applied visa record
            $appliedVisa = AppliedVisa::create($request->all());
    
            // Return success response
            return response()->json($appliedVisa, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation exceptions
            return response()->json([
                'message' => 'Validation error occurred',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Handle other types of exceptions
            return response()->json([
                'message' => 'An error occurred while processing your request',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    

    public function show($id)
    {
        $appliedVisa = AppliedVisa::with(['user', 'country', 'visaType'])->findOrFail($id);
        return response()->json($appliedVisa);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'country_id' => 'sometimes|exists:countries,id',
            'visa_type_id' => 'sometimes|exists:visatypes,id',
            'applied_at' => 'nullable|date',
            'status' => 'nullable|in:pending,approved,rejected',
        ]);

        $appliedVisa = AppliedVisa::findOrFail($id);
        $appliedVisa->update($request->all());
        return response()->json($appliedVisa);
    }

    public function destroy($id)
    {
        $appliedVisa = AppliedVisa::findOrFail($id);
        $appliedVisa->delete();
        return response()->json(null, 204);
    }
}
