import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from "axios";
import MUIThemeWrapper from "../MUIThemeWrapper";

export default function SearchResults(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://api.github.com/repos/iiumschedule/iium_schedule/releases/latest');

            const assets = result.data.assets.filter(asset => asset.name.endsWith(props.filetype));
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
                <Box mt={1}>
                    <Button
                        key={item.id}
                        spacing={2}
                        href={item.browser_download_url}
                        // outlined is replaced from contained because with contained,
                        // the colour onhover become docusaurus theme colour
                        // one way to fix this is by replacing href with
                        // onClick={() => window.open(item.browser_download_url, "_blank")}
                        // but haha that just terrible
                        variant="outlined"
                        color="primary"
                        startIcon={<FileDownloadIcon/>}
                    >
                        {item.name}
                    </Button>
                </Box>
            ))}
        </MUIThemeWrapper>
    );
}

