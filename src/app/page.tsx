import HeadPage from "@/composition/head/Head";
import SectionOne from "@/composition/section-one/section-one";
import SectionTwo from "@/composition/section-two/section-two";
import SectionThree from "@/composition/section-three/section-three";
import Footer from "@/composition/footer/footer";


export default function Home() {
    return (
        <>
            <HeadPage/>
            <SectionOne/>
            <SectionTwo/>
           <SectionThree/>
            <Footer/>
        </>
    );
}
