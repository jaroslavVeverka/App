import React, {useEffect, useState} from "react";
import api from "../../utils/api";
import axios from 'axios';

import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export function HomePageTemplate() {
    const [dataDB, setDataDB] = useState('sss');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                //const result = await api.get('/dd');
                const result = await axios.get('http://localhost:3001/')
                setDataDB(result.data[0].ID);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            setIsLoading(false)
        }
        fetchData()
    },[])

    return (
        <Container>
            <Row>
                    <h2>Ahoj, toto je uvodni page.</h2>
                    { isLoading ? (<div>Loading...</div>) :
                        error ? (<div>Error occurred!</div>) : (
                        <div>{dataDB}</div>
                    ) }

            </Row>
        </Container>
    )
}