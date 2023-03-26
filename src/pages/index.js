import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import SearchForm from '@/components/SearchForm';
import ListCharacter from "@/components/ListCharacter/ListCharacter";

const Home = () => {
    const router = useRouter();
    
    return (
        <LayoutDefault>
            <SearchForm />
            <ListCharacter page_url={ router.route } search="" />
        </LayoutDefault>
    )
}

export default Home;