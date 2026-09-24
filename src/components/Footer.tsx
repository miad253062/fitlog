import Image from "next/image";
import FooterImage from '@/assets/logo.png'

function Footer () {
    return (
        <div className="border-t border-gray-700 p-4 mt-20">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src={FooterImage} alt="Logo" height={30} width={30}></Image>
                        <h2 className="font-bold">FITLOG</h2>
                    </div>
                    <div>
                        <p className="text-gray-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

export default Footer;