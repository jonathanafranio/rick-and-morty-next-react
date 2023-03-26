import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import SearchForm from '@/components/SearchForm';
import ListCharacter from "@/components/ListCharacter/ListCharacter";

const HomePagination = () => {
    const router = useRouter();
    const page_active = router.query.p;
    
    return (
        <LayoutDefault>
            <SearchForm />
            <ListCharacter 
                page_url={ router.basePath } 
                page_num={ page_active } 
                search="" 
                title={ `Lista de personagens - página: ${page_active}` } />
        </LayoutDefault>
    )
}

export default HomePagination;