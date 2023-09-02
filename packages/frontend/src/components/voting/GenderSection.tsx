function GenderSection() {
    return(
    <>
        <div className="flex flex-col gap-2 mb-6">
            <p className="text-gray-200">Gender</p>
            <ul className="flex items-center justify-center gap-4">
            <div className="text-gray-300 rounded-lg border-2 w-36 h-12 px-12 py-2.5">
                Male
            </div>
            <div className="text-gray-300 rounded-lg border-2 w-36 h-12 px-10 py-2.5">
                Female
            </div>
            </ul>
        </div>
    </>
    );
}

export default GenderSection;