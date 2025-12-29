function greet(name) {
    return `Hello, ${name}!`;
}
// Ensure function is exportable
export default greet ;
// If run directly , print output {usefu for debugging
if (require.main === module) {
    console.log("World");
}

