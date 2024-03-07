import React from 'react';
import Layout from '@theme/Layout';
import {TextField, Button, LinearProgress, Alert} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useForm} from "react-hook-form";
import MUIThemeWrapper from "../components/MUIThemeWrapper";

export default function FeedbackPage() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const onSubmit = async function (data, e) {
    setLoading(true);
    // submit form to firebase functions
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    const response = await fetch('https://asia-southeast2-iiumschedule-af71a.cloudfunctions.net/feedback', options);
    const status = await response.status;
    if (status === 200) {
      console.log('Success:', status);
      reset();
      setSent(true)
    } else {
      alert('Sending feedback failed. Please try again. If the problem persists, please reach me at m.fareez.iqmal@gmail.com')
    }

    // await new Promise(f => setTimeout(f, 2000));
    setLoading(false);
  };
  const onError = (errors, e) => console.log(errors, e);

  console.log(errors);


  return (
      <Layout
          title="Feedback/Report issues"
          description="Submit feedback or report issues"
      >
        <main style={{marginTop: "32px", marginLeft: "38px", marginRight: "24px", maxWidth: "996px"}}>

          <h1>Feedback form</h1>

          <p>Want to say something about this product? Or you want to report issues you've encountered when using the
            app? Feel free
            to fill in the form below and submit it to us. We'll try to get back to you as soon as possible.
          </p>

          <MUIThemeWrapper>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <TextField fullWidth variant="outlined" margin={"dense"} required={true} type="text"
                         label="Nickname" {...register("name", {maxLength: 80})} />
              <br/>
              <TextField fullWidth variant="outlined" margin={"dense"} type="email" label="Email"
                         helperText={"Please to leave your email here so that I can respond"} {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i
              })} />
              <br/>
              <TextField fullWidth variant="outlined" margin={"dense"} required={true} type="text" label="Title"
                         placeholder={"Eg: Button X not working"} {...register("title", {
                required: true,
                maxLength: 90
              })} />
              <br/>
              <TextField fullWidth multiline minRows={4} variant="outlined" margin={"dense"} type="text"
                         label={"Description"}
                         placeholder="Tell me more what you think..." {...register("description", {required: false})} />
              <br/>

              {/*<input type={"submit"}/>*/}
              <Button disabled={loading} type="submit" variant="contained" color="primary" endIcon={<SendIcon/>}
                      style={{marginTop: "20px", marginBottom: "10px"}}>Submit</Button>

              {loading && <LinearProgress/>}
              {sent && <Alert severity="success" action={
                <Button href={'/'}>Back Home</Button>
              }>Feedback successfully sent!</Alert>}
              <div style={{padding: "15px"}}></div>
              <p>Alternatively, you can file an issue directly on <a href="https://github.com/iiumschedule/iium_schedule/issues">GitHub</a>.</p>
              <div style={{padding: "40px"}}></div>
            </form>
          </MUIThemeWrapper>
        </main>
      </Layout>
  );
}