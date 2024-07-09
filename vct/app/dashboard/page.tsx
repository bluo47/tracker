export default async function Page() {
    return (
    <main>
        <title>VCT Tracker</title>
        <div className="bg-white text-teal-600 font-extrabold">
            <p>Hello World Header</p>
        </div>
        <div className="bg-white relative md:container md:mx-auto flex max-w-56 p-6 rounded-full">
            <div className="text-black">
            When controlling the flow of text, using the CSS property
            <span className="inline bg-purple-200 self text-center font-extrabold rounded-lg px-2">display: inline</span>
            will cause the text inside the element to wrap normally.
    
            While using the property <span className="inline-block">display: inline-block</span>
            will wrap the element to prevent the text inside from extending beyond its parent.
    
            Lastly, using the property <span className="block bg-purple-200 self text-center font-extrabold rounded-lg">display: block</span>
            will put the element on its own line and fill its parent.
            </div>
        </div>
    </main>);
}