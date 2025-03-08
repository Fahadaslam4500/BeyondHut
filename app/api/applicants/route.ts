import { NextResponse } from 'next/server';
import Applicant from '@/models/Applicant';
import Job from '@/models/Job';
import { connectToDB } from '@/lib/db/db';



export async function GET(req: Request) {
    await connectToDB();
    
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get('jobId');
    const search = searchParams.get('search') || '';  // Extract search query if provided
    const page = parseInt(searchParams.get('page') || '1', 10);  // Default page 1
    const limit = parseInt(searchParams.get('limit') || '5', 10);  // Default limit 5 per page

    const skip = (page - 1) * limit;  // Calculate how many records to skip

    try {
        // Create search filter
        const searchFilter = search
            ? { $or: [{ name: { $regex: search, $options: 'i' } }, { email: { $regex: search, $options: 'i' } }] }
            : {};

        // Create job filter
        const jobFilter = jobId ? { job: jobId } : {};

        // Combine filters
        const filters = { ...searchFilter, ...jobFilter };

        // Fetch applicants based on filters and pagination
        const applicants = await Applicant.find(filters)
            .populate('job')
            .skip(skip)
            .limit(limit);

        const totalApplicants = await Applicant.countDocuments(filters);  // For pagination info

        return NextResponse.json({
            success: true,
            data: applicants,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalApplicants / limit),
                totalApplicants,
            },
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching applicants:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch applicants',
        }, { status: 500 });
    }
}


// 🟢 POST a new applicant
export async function POST(req: Request) {
    await connectToDB();

    try {
        const body = await req.json();
        const { job, name, email, linkedin, resume } = body;

        // Validate required fields
        if (!job || !name || !email || !linkedin || !resume) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            }, { status: 400 });
        }

        // Check if the job exists
        const existingJob = await Job.findById(job);
        if (!existingJob) {
            return NextResponse.json({
                success: false,
                message: 'Invalid job ID',
            }, { status: 404 });
        }

        // Create a new applicant
        const newApplicant = await Applicant.create({
            job,
            name,
            email,
            linkedin,
            resume,
        });

        return NextResponse.json({
            success: true,
            data: newApplicant,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating applicant:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create applicant',
        }, { status: 500 });
    }
}
