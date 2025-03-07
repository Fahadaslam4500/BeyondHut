import { NextResponse } from 'next/server';
import Company from '@/models/Company';
import { connectToDB } from '@/lib/db/db';

// GET all companies
// export async function GET() {
//     await connectToDB();

//     try {
//         const companies = await Company.find();
//         return NextResponse.json({
//             success: true,
//             data: companies,
//         }, { status: 200 });
//     } catch (error) {
//         console.error('Error fetching companies:', error);
//         return NextResponse.json({
//             success: false,
//             message: 'Failed to fetch companies',
//         }, { status: 500 });
//     }
// }


export async function GET(request: Request) {
    await connectToDB();

    try {
        // Extract search and pagination parameters from the query string
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "6", 10);  // Default 5 items per page
        const search = searchParams.get("search") || "";

        // Build query object
        const query = search
            ? { name: { $regex: search, $options: "i" } } // Case-insensitive search
            : {};

        // Fetch companies with pagination and search
        const companies = await Company.find(query)
            .sort({_id:-1})
            .skip((page - 1) * limit)
            .limit(limit); 

        // Get total count for pagination
        const totalCompanies = await Company.countDocuments(query);

        return NextResponse.json({
            success: true,
            data: companies,
            totalPages: Math.ceil(totalCompanies / limit),
            currentPage: page,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching companies:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch companies',
        }, { status: 500 });
    }
}


// export async function GET(request: Request) {
//     await connectToDB();

//     try {
//         // Extract search and pagination parameters from the query string
//         const { searchParams } = new URL(request.url);
//         const page = parseInt(searchParams.get("page") || "1", 10);
//         const limit = parseInt(searchParams.get("limit") || "5", 10);  // Default 5 items per page
//         const search = searchParams.get("search") || "";

//         // Build query object
//         const query = search
//             ? { name: { $regex: search, $options: "i" } } // Case-insensitive search
//             : {};

//         // Fetch companies with pagination and search
//         const companies = await Company.find(query)
//             .skip((page - 1) * limit)
//             .limit(limit);

//         // Get total count for pagination
//         const totalCompanies = await Company.countDocuments(query);

//         return NextResponse.json({
//             success: true,
//             data: companies,
//             totalPages: Math.ceil(totalCompanies / limit),
//             currentPage: page,
//         }, { status: 200 });
//     } catch (error) {
//         console.error('Error fetching companies:', error);
//         return NextResponse.json({
//             success: false,
//             message: 'Failed to fetch companies',
//         }, { status: 500 });
//     }
// }




// POST a new company
export async function POST(req: Request) {
    await connectToDB();

    try {
        const body = await req.json();
        const { name, image, description } = body;

        // Validate required fields
        if (!name || !image || !description) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            }, { status: 400 });
        }

        const newCompany = await Company.create({
            name,
            image,
            description,
        });

        return NextResponse.json({
            success: true,
            data: newCompany,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating company:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create company',
        }, { status: 500 });
    }
}
