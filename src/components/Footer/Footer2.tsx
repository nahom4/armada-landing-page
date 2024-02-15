import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
interface socialMediaProps {
    href: string;
    icon: any;
  }
  
function SocialMedia({ href, icon }: socialMediaProps) {
    return (
      <Link
        className=" w-12 h-12 p-3 rounded-full "
        href={href}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </Link>
    );
  }

  
function Footer(){
    return(
        <footer className="flex flex-col gap-8 items-center w-full bg-[#F6F6F6] py-10 my-10 text-sm">
            <div className="flex w-full justify-around flex-wrap">
                <div className="p-4">
                    <ul className="space-y-3">
                        <li className="font-semibold">For Marketers</li>
                        <li>Courses & Tasks</li>
                        <li>Apprenticeships</li>
                        <li>About Us</li>
                        <li>Acadium Plus</li>
                    </ul>
                </div>
                
                <div className="p-4">
                <ul className="space-y-3">
                        <li className="font-semibold">For Business</li>
                        <li>Tasks</li>
                        <li>Apprenticeships</li>
                    </ul>
                </div>

                <div className="p-4">
                    <ul className="space-y-3">
                        <li className="font-semibold">Free Marketing Courses</li>
                        <li>Digital Marketing</li>
                        <li>Social Media Marketing</li>
                        <li>Paid Advertising</li>
                        <li>SEO</li>
                        <li>Email Marketing</li>
                        <li>Content Marketing</li>
                        <li>Website Design</li>
                        <li>Marketing Analytics</li>
                        <li>Affiliate Marketing</li>
                        <li>Influencer Marketing</li>
                        <li>Creating Career Opportunities</li>
                    </ul>
                </div>

                <div className="p-4">
                    <ul className="space-y-3">
                        <li className="font-semibold">Aramada</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Affiliate Program</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                    </ul>

                </div>
            </div>
            <div className="border w-3/4 border-slate-300"></div>
            <div className="flex flex-col md:flex-row justify-around w-full items-center ">
                <div className="flex flex-col sm:flex-row gap-3 m-2">
                    <Link href={'#'}>
                        © Armada Marketing
                    </Link>
                    <Link href={'#'}>
                        .Terms of Use
                    </Link>
                    <Link href={'#'}>
                        .Privacy Policy
                    </Link>
                    <Link href={'#'}>
                        .Use Policy
                    </Link>
                    <Link href={'#'}>
                        .Platform Agreement
                    </Link>
                   
                </div>

                <div className="flex flex-wrap m-2">
                    <SocialMedia href="https://www.facebook.com/" icon={faFacebook} />
                    <SocialMedia href="https://www.instagram.com/" icon={faInstagram}/>
                    <SocialMedia href="https://www.linkedin.com/" icon={faLinkedin} />
                    <SocialMedia href="https://www.twitter.com/" icon={faTwitter} />
                    <SocialMedia href="https://www.youtube.com/" icon={faYoutube} />
                </div>
            </div>
        </footer>
    )
}

export default Footer