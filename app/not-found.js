export default async function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-col justify-center">
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
            </div>
        </div>
    );
}
