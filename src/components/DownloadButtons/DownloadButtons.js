import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from "axios";
import MUIThemeWrapper from "../MUIThemeWrapper";

export default function SearchResults(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://api.github.com/repos/iqfareez/iium_schedule/releases/latest');

            const assets = result.data.assets.filter(asset => asset.name.endsWith(props.filetype));
            console.log(assets)
            if (!ignore) setData(assets);
        }

        fetchData();
        return () => {
            ignore = true;
        }
    }, []);

    return (
        <MUIThemeWrapper>
            {data.map(item => (
                <Box mt={1}><Button spacing={2} onClick={() => {
                    window.open(item.browser_download_url)
                }} variant="contained" color="primary" key={item.id}>
                    {item.name}
                </Button>
                </Box>
            ))}
        </MUIThemeWrapper>
    );
}

