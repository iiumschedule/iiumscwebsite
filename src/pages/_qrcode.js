import React from 'react';
import Layout from '@theme/Layout';
import { QRCodeSVG } from 'qrcode.react';
import CodeBlock from '@theme/CodeBlock';
import queryString from 'query-string'

// this is /pages/qrcode.mdx equivalent, but in js
// why not this file? No default styling (no padding etc.)
// I know I can add that thing but I'm lazy

export default function Qrcode() {

    // get value json from querystring and save in a variable
    const data = queryString.parse(window.location.search).data;
    const dataDecoded = decodeURIComponent(data);
    const json = JSON.parse(dataDecoded);
    const jsonString = JSON.stringify(json);
    // const jsonString = JSON.stringify(json, null, 2);

    return (
        <Layout
            title="Hi"
            description="meow"
        >
            <main>
                <QRCodeSVG value={json} />
                <CodeBlock
                    language="json">
                    {jsonString}
                </CodeBlock>
            </main>
        </Layout>
    );
};