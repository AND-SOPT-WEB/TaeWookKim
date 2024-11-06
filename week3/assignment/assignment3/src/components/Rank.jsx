import { useEffect, useState } from 'react';
import { orderBy } from 'lodash';
import styled from "@emotion/styled";
import formatDate  from '../algorithm/formatDate';
import { Theme } from '../styles/theme';

const Rank =()=>{
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const savedRank = JSON.parse(localStorage.getItem("results"))||[];
        //orderBy함수를 사용하여 정렬
        const sortedRank = orderBy(savedRank, ['level', 'time'], ['desc', 'asc']);
        setRanking(sortedRank);
    }, []);

    const handleResetButton = () => {
        localStorage.removeItem("results");
        setRanking([]);
    };

    return(
        <Section>
            <Header>
                <H1>랭킹</H1>
                <Button onClick={handleResetButton}>
                    초기화
                </Button>
            </Header>
            <Table>
                <Thead>
                    <tr>
                        <th>타임스탬프</th>
                        <th>레벨</th>
                        <th>플레이 시간</th>
                    </tr>
                </Thead>
                <TBody>
                    {ranking.map((result, i) => (
                        <tr key={i}>
                            <td>{formatDate(result.timestamp)}</td>
                            <td>Level {result.level}</td>
                            <td>{result.time}초</td>
                        </tr>
                    ))}
                </TBody>
            </Table>
        </Section>
    );
}


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    padding: 1rem;
    background-color: ${Theme.color.white};
`;

const H1 = styled.h1`
    ${Theme.font.H1Large};
    margin: 0 auto;
    flex-grow: 1;
    text-align: center;
`;

const Button = styled.button`
    font-size: 1.1rem;
    padding: 0.3rem 0.8rem;
    background-color: lightgray;
    cursor: pointer;
`;

const Table = styled.table`
    width: 100%;
    max-width: 40rem;
    margin-top: 1rem;
    text-align: center;
`;

const Thead = styled.thead`
    background-color: ${Theme.color.lightgreen};
    font-weight: bold;
    color: ${Theme.color.white};

    th {
        padding: 0.8rem;
    }
`;

const TBody = styled.tbody`
    td {
        padding: 0.6rem;
        font-size: 0.9rem;
        border-bottom: 1px solid ${Theme.color.black};
    }
`;

export default Rank;