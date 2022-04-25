import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const PrivPol = (props) => {
  return (
    <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="body1" color="initial">
                <h1>Dressense Privacy Policy</h1> 
                <h3>What data do we collect?</h3>
                <p>Dressense collects the following data: Email address; Password; Pictures you upload; Tags of clothes; Location; Dressing preferences 
                </p>
                <h3>How do we collect your data?</h3>
                <p>You directly provide Dressense with most of the data we collect. We collect data and process data when you: Register online; Upload pictures; Put tags on clothes; Using Dressense when your location option is on; Voluntarily complete our preference questionnair</p>
                <h3>How will we use your data?</h3>
                <p>Dressense collects your data so that we can: Manage your account; Store your wardrobe into your account; Recognize clothes that you upload to the wardrobe; Generate random outfit and weekly plan based on weather; Improve the accuracy of our AI algorithm</p>
                <h3>How do we store your data?</h3>
                <p>Dressense securely stores your data at Digital Ocean.</p>
                <h3>How long will we store your data?</h3>
                <p>Dressense will keep your personal data for 5 year. Once this time period has expired, we will delete your data by dropping the relevant information from the tables in our database.</p>
                <h3>What are your data protection rights?</h3>
                <p>Dressense would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                  The right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, the right to data portability.
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: contact@dressense.com/</p>
                <h3>What are cookies?</h3>
                <p> Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. 
                  When you visit our websites, we may collect information from you automatically through cookies or similar technology.
                  For further information, visit allaboutcookies.org. Cookies do not usually contain any information that personally identifies you, the Website user. 
                  However, personal information that we store about you may be linked to the information obtained from and stored in cookies. 
                  For more information on how such personal information is handled and stored, refer to our Privacy Policy which is available online at: www.dressense.com/privacy.</p>
                <h3>How do we use cookies?</h3>
                <p>Dressense uses cookies in a range of ways to improve your experience on our website, including: Keeping you signed in; Understanding how you use our website; Keeping your weekly outfit </p>
                <h3>What type of cookies do we use?</h3>
                <p>There are a number of different types of cookies, however, Dressense uses: Functionality: Dressense uses these cookies so that we recognize you on our website and remember your previously selected preferences. 
                  These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.</p>
                <h3>How to manage cookies</h3>
                <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser <a href="https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop">https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop </a> 
                  However, in a few cases, some of our website features may not function as a result.</p>
                
                <h2>How to contact us:</h2>
                <p>If you have any questions about Dressense’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection right, please do not hesitate to contact us.
                  Email us at: contact@dressense.com
                  Call us: (+44)7123456789
                  Or write to us at: www.dressense.com/contact
                  Visit us at: University of Birmingham, B15 2QS</p>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default PrivPol;