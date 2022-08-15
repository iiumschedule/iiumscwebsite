import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from "axios";

export default function SearchResults(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let ignore = false;

        // TODO: Change to latest releases only after grand release 1.0.0

        async function fetchData() {
            const result = await axios('https://api.github.com/repos/iqfareez/iium_schedule/releases');

            const assets = result.data[0].assets.filter(asset => asset.name.endsWith(props.filetype));
            console.log(assets)
            if (!ignore) setData(assets);
        }

        fetchData();
        return () => {
            ignore = true;
        }
    }, []);

    return (
        <>
            {data.map(item => (
                <Box mt={1}><Button spacing={2} onClick={() => {
                    window.open(item.browser_download_url)
                }} variant="contained" color="primary" key={item.id}>
                    {item.name}
                </Button>
                </Box>
            ))}
        </>
    );
}

