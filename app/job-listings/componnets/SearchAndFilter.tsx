
'use client';
import FadeInBottom from '@/components/framermotion/FadeInBottom';
import FadeInLeft from '@/components/framermotion/FadeInLeft';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from 'postcss';

type Props = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    filters: { date: string; type: string; domain: string };
    setFilters: (filters: { date: string; type: string; domain: string }) => void;
};

export default function SearchAndFilter({ searchQuery, setSearchQuery, filters, setFilters }: Props) {
    return (
        <> 
        <div className=''>
            <div className='h-[250px]  flex justify-center items-center bg-[#161C28] mb-3'>
                <div className='md:p-10 p-3 flex flex-col justify-center items-center gap-2'>
                    <FadeInLeft once={false} duration={0.5} distance={60}>
                        <h1 className='text-4xl md:text-5xl font-bold text-white text-center'>Find Your Dream Job  at Beyond Hut</h1>
                    </FadeInLeft>
                    <div className='max-w-[400px] mt-3 flex justify-center'>
                        <FadeInBottom once={false} duration={1} distance={40}>
                            <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </FadeInBottom>

                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-4 -mt-10  text-black container ">
                <div className='flex justify-between items-center rounded-lg bg-[#fdfcf3] border-2 border-gray-300  text-gray-900 w-full px-3 py-1 shadow-lg shadow-gray-300'>
                    <Search className='ms-4 text-gray-900' />
                    <input
                        type="text"
                        placeholder="Search Your Dream Job"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-4 bg-transparent placeholder:text-lg outline-none w-full"
                    />
                </div>
               
            </div>
        </div>
        <div>
             <div className="flex flex-col md:flex-row gap-1 md:gap-4 container mt-2">
                    {/* Date Filter */}
                    <Select onValueChange={(value) => setFilters({ ...filters, date: value === 'all' ? '' : value })}>
                        <SelectTrigger className="border-2 border-gray-300 rounded-lg p-6 bg-transparent outline-none w-full text-left shadow-lg shadow-gray-300">
                            <SelectValue placeholder="Date posted" className=''/>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fdfcf3]'>
                            <SelectItem value="all" className='px-4 py-3'>All Time</SelectItem>
                            <SelectItem value="24h" className='px-4 py-3'>Last 24 hours</SelectItem>
                            <SelectItem value="7d" className='px-4 py-3'>Last 7 days</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Job Type Filter */}
                    <Select onValueChange={(value) => setFilters({ ...filters, type: value === 'all' ? '' : value })}>
                        <SelectTrigger className="border-2 border-gray-300 rounded-lg p-6 bg-transparent outline-none w-full text-left shadow-lg shadow-gray-300">
                            <SelectValue placeholder="Job type"/>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fdfcf3]'>
                            <SelectItem value="all" className='px-4 py-3'>All</SelectItem>
                            <SelectItem value="full-time" className='px-4 py-3'>Full-time</SelectItem>
                            <SelectItem value="part-time" className='px-4 py-3'>Part-time</SelectItem>
                            <SelectItem value="remote" className='px-4 py-3'>Remote</SelectItem>
                            <SelectItem value="contract" className='px-4 py-3'>Contract</SelectItem>
                            <SelectItem value="internship" className='px-4 py-3'>Internship</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Domain Filter */}
                    <Select onValueChange={(value) => setFilters({ ...filters, domain: value === 'all' ? '' : value })}>
                        <SelectTrigger className="border-2 border-gray-300 rounded-lg p-6 bg-transparent outline-none w-full text-left shadow-lg shadow-gray-300">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent className='bg-[#fdfcf3]'>
                            <SelectItem value="all" className='px-4 py-3'>All</SelectItem>
                            <SelectItem value="artificial intelligence" className='px-4 py-3'>Artificial Intelligence</SelectItem>
                            <SelectItem value="development" className='px-4 py-3'>Development</SelectItem>
                            <SelectItem value="design" className='px-4 py-3'>Design</SelectItem>
                            <SelectItem value="software" className='px-4 py-3'>Software</SelectItem>
                            <SelectItem value="machine learning" className='px-4 py-3'>Machine Learning</SelectItem>
                            <SelectItem value="data analyst" className='px-4 py-3'>Data Analyst</SelectItem>
                            <SelectItem value="sales" className='px-4 py-3'>Sales</SelectItem>
                            <SelectItem value="marketing" className='px-4 py-3'>Marketing</SelectItem>
                            <SelectItem value="others" className='px-4 py-3'>Others</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
        </div>
        </>
    );
}
