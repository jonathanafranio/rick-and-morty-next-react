import LayoutDefault from "@/components/Layouts/LayoutDefault";
import SearchForm from '@/components/SearchForm';
import ListCharacter from "@/components/ListCharacter/ListCharacter";

const Home = () => {
    return (
        <LayoutDefault>
            <SearchForm />
            <ListCharacter page_url={ '' } search="" />
        </LayoutDefault>
    )
}

export default Home;