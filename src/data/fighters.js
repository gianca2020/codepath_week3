import {v4 as uuid} from 'uuid';

const fighters =[
    {
        title: "Alexandre Pantoja",
        description: "Flyweight Champion",
        imageUrl: "https://ufc.com/images/styles/inline/s3/2025-01/5/PANTOJA_ALEXANDRE_BELT_12-07.png?itok=bTsTyR7B",
        Link: "https://www.ufc.com/athlete/alexandre-pantoja",
        id: uuid(),
        ans: 2
    },
    {
        title: "Merab Dvalishvili",
        description: "Bantamaweight Champion",
        imageUrl: "https://ufc.com/images/styles/inline/s3/2025-06/DVALISHVILI_MERAB_BELT_06-07.png?itok=Q618Xr6J",
        Link: "https://www.ufc.com/athlete/merab-dvalishvili",
        id: uuid(),
        ans: 2
    },
    {
        title: "Alexander Volkanovski",
        description: "The GOATTTTT",
        imageUrl: "https://ufc.com/images/styles/inline/s3/2024-02/VOLKANOVSKI_ALEXANDER_BELT_02-17.png?itok=JL7vKt3v",
        Link: "https://www.ufc.com/athlete/alexander-volkanovski",
        id: uuid(),
        ans: 0
    },
    {
        title: 'Islam Makhachev',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-01/7/MAKHACHEV_ISLAM_BELT_01-18.png?itok=S-aY39p8',
		description: 'vacated UFC Lightweight Champion.',
		Link: 'https://www.ufc.com/athlete/islam-makhachev',
        id: uuid(),
        ans: 4},
    {
        title: 'Jack Della Maddalena',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-05/DELLA_MADDALENA_JACK_BELT_05-10.png?itok=0Kf4B41E',
		description: 'Hates m&M\'s',
		Link: 'https://www.ufc.com/athlete/jack-della-maddalena',
        id: uuid(),
        ans: 0},
    {
        title: 'Dricus Du Plessis',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-02/DU_PLESSIS_DRICUS_BELT_02-08.png?itok=cXBgLUqR',
		description: 'Self proclaimed first African champion',
		Link: 'https://www.ufc.com/athlete/dricus-du-plessis',
        id: uuid(),
        ans: 2},
    {
        title: 'Magomed Ankalaev',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-03/ANKALAEV_MAGOMED_BELTMOCK.png?itok=ptzvKJ3h',
		description: 'broke my heart',
		Link: 'https://www.ufc.com/athlete/magomed-ankalaev',
        id: uuid(),
        ans: 0},
    {
        title: 'Jon Jones',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-01/5/JONES_JON_BELT_11-16.png?itok=mCioZKce',
		description: 'Not my champ',
		Link: 'https://www.ufc.com/athlete/jon-jones',
        id: uuid(),
        ans: 1},
    {
        title: 'Zhang Weili',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-02/ZHANG_WEILI_BELT_02-08.png?itok=gW1566iJ',
		description: 'I think shes cool',
		Link: 'https://www.ufc.com/athlete/weili-zhang',
        id: uuid(),
        ans: 3},
    {
        title: 'Valentina Shevchenko',
		imageUrl:'https://ufc.com/images/styles/inline/s3/2025-05/SHEVCHENKO_VALENTINA_BELT_05-10.png?itok=mEunz16d',
		description: 'Womens PFP champ',
		Link: 'https://www.ufc.com/athlete/valentina-shevchenko',
        id: uuid(),
        ans: 1}
];

const fighterData = fighters.map((fighter, originalIndex) => ({
    id: uuid(),
    originalIndex: originalIndex,
    ...fighter,
}));

export default fighterData;
