const Footer = () => {
    return (
        <section className="w-full h-24 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="w-7xl flex items-center justify-center pl-10 pr-10">
                <p>Copyright&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </div>
        </section>
    )
}


export default Footer;