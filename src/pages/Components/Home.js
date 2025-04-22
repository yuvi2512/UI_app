import { Box, Typography, Grid, Button, Paper, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const HomeSection = () => {
  return (
    <>
      <Box sx={{ px: 4, py: 6, backgroundColor: "#fffde7" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#880e4f" }}>
          Choose us{" "}
          <Typography
            component="span"
            sx={{ fontWeight: 300, color: "black", fontStyle: "italic" }}
          >
            ...Let's work together
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              vintage <span style={{ fontStyle: "italic" }}>adj_</span>
            </Typography>
            <Typography sx={{ color: "black" }}>
              of old, recognized and enduring interest, importance or quality:
              classic
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              hippo <span style={{ fontStyle: "italic" }}>n_</span>
            </Typography>
            <Typography sx={{ color: "black" }}>
              meaning versatile, strong, friendly, assertive, caring, quirky and
              supportive
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic4.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography gutterBottom variant="h5">
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "text.primary" }}
                  >
                    Why{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#f57c00" }}>
                    We’re unique
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  We believe in support, customer service and being available to
                  our clients 24/7. We’re unique that way! We provide our
                  clients with the best service and care.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic5.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography gutterBottom variant="h5">
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "text.primary" }}
                  >
                    Why{" "}
                  </Box>
                  <Box component="span" sx={{ color: "green" }}>
                    We’re traditional
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Our values are traditional, but our approach is not. Our
                  clients are people we want to work with. We enjoy the work we
                  do, the people and businesses we do it with and for.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic6.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography gutterBottom variant="h5">
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "text.primary" }}
                  >
                    Why{" "}
                  </Box>
                  <Box component="span" sx={{ color: "#d50000" }}>
                    We’re special
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  We enjoy what we do and who we do it with! Our passion is very
                  apparent. Get in touch…you’ll see the difference.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            endIcon={<ArrowCircleRightIcon />}
            sx={{
              mr: 2,
              borderRadius: "30px",
              px: 3,
              backgroundColor: "#333",
              color: "white",
            }}
          >
            Learn More
          </Button>

          <Button
            variant="contained"
            color="warning"
            endIcon={<ArrowCircleRightIcon />}
            sx={{ borderRadius: "30px", px: 3 }}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={{ position: "relative", my: 6 }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <FavoriteIcon sx={{ fontSize: 100, color: "error.main" }} />
          </Box>

          <Box textAlign="center">
            <Typography variant="h5" sx={{ mt: 2, color: "black" }}>
              We live and work by the
            </Typography>
            <Typography variant="h2" sx={{ color: "gold", fontWeight: "bold" }}>
              GOLDEN RULE
            </Typography>
            <Typography variant="h6" fontStyle="italic" sx={{ color: "black" }}>
              “Do unto others as you would have them do unto you”
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            borderColor: "red",
            borderWidth: "2px",
            mb: 5,
          }}
        />

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#880e4f", mb: 2 }}
        >
          We are{" "}
          <Typography component="span" sx={{ fontWeight: 300,color:'black',fontStyle: "italic" }}>
            Frequent Research
          </Typography>
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic1.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography gutterBottom variant="h5">
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "text.primary" }}
                  >
                    We are a group of...{" "}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ color: "#ef6c00", alignItems: "center" }}
                  >
                    dedicated, creative people
                  </Typography>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  We love print. We love graphics and design. We love our team.
                  Come check us out.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic2.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography gutterBottom variant="h5">
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "text.primary" }}
                  >
                    Our
                  </Box>{" "}
                  <Box component="span" sx={{ color: "green" }}>
                    bread & butter
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Trusted long lasting relationships are the b & b of VHM. We
                  value & build relationships with clients, vendors, friends,
                  family and each other.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 300,
                height: 350,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/pic3.PNG"
                sx={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <Divider />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography gutterBottom>Got an idea?</Typography>
                <Typography gutterBottom variant="h5" sx={{ color: "#d50000" }}>
                  Let’s talk
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  We know that listening is an invaluable skill. We like to
                  listen. Run your ideas by us and we’ll give you our honest
                  opinion
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeSection;
