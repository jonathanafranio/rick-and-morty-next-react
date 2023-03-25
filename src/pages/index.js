import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import ListCharacter from "@/components/ListCharacter/ListCharacter"

const Home = () => {
    const router = useRouter();
    
    return (
        <LayoutDefault>
            <ListCharacter page_url={ router.route } search="" />
        </LayoutDefault>
    )
}

export default Home;