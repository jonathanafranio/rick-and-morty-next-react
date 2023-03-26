import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import Preload from "@/components/Preload";
import CharacterInfo from "@/components/CharacterInfo";
import Episodes from "@/components/Episodes";
const Personagem = (props) => {
    const router = useRouter();
    const user_id = router.query.id;

    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [origin, setOrigin] = useState('');
    const [location_home, setLocation_home] = useState('');
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        if(!router.isReady) return;

        const baseUrl = `/api/personagem?id=${user_id}`
        
        fetch(baseUrl)
            .then(r => r.json())
            .then(res => {
                setTitle(res.name);
                setImage(res.image);
                setStatus(res.status);
                setSpecies(res.species);
                setGender(res.gender);
                setOrigin(res.origin.name);
                setLocation_home(res.location.name);
                setEpisode(res.episode);

                setLoading(false);
            })
            .catch(e => {
                setLoading(false)
            })
    },[router.isReady])


    return (
        <LayoutDefault>
            { loading ? (
                <Preload />
            ) : (
                <div className="character">
                    <h1 className="page-section__title">Personagem: { title }</h1>

                    <CharacterInfo 
                        title={ title } 
                        image={ image } 
                        status={ status } 
                        species={ species } 
                        gender={ gender } 
                        origin={ origin } 
                        location={ location_home } 
                        episode={ episode } />

                    <Episodes epsodes={ episode } />

                </div>
            ) }

        </LayoutDefault>
    )
}

export default Personagem;