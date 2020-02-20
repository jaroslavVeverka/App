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
                const result = await api.get('/');
                console.log(result.data[0]);
                setDataDB(result.data[0]);
            } catch (e) {
                console.error(e);
                setError(true);
            } finally {
                setIsLoading(false)
            }

        }
        fetchData()
    },[])

    return (
        <Container>
            <Row>
                    <h2>Ahoj, toto je uvodni page  .</h2>
                    { isLoading ? (<div>Loading...</div>) :
                        error ? (<div>Error occurred!</div>) : (
                        <div>{JSON.stringify(dataDB)}</div>
                    ) }

            </Row>
        </Container>
    )
}