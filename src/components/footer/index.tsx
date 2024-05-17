import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const footerStyles = {
  backgroundColor: "#242D36",
  padding: "32px 0",
  color: "#fff",
  borderRadius: "24px 24px 0 0",
  overflow: "hidden",
};

const telLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.35rem",
  lineHeight: "1.18",
  fontWeight: 600,
  "&:hover": {
    color: "#58A1FF",
  },
};

const contacts = {
  gap: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "28px 0 0 24px",
  order: { xs: 2, lg: 0 },
};

const caption = {
  margin: "4px 0 0 0",
  fontSize: "0.75rem",
  lineHeight: "1.33",
  fontFamily: "inherit",
};

const address = {
  margin: "26px 0 0 0",
  lineHeight: "1.125",
  fontFamily: "inherit",
};

const social = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "28px 0 0 24px",
};

const listStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: { xs: "16px", lg: "8px 0" },
  margin: 0,
  padding: 0,
  justifyContent: { xs: "flex-start", lg: "space-between" },
};

const socialLink = {
  color: "#fff",
  padding: "8px 12px 8px 8px",
  textDecoration: "none",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  lineHeight: "1.143",
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
};

const footerLink = {
  color: "#fff",
  textDecoration: "none",
  opacity: "0.5",
  fontSize: "0.875rem",
  "&:hover": {
    opacity: "1",
  },
};

const itemStyles = {
  margin: 0,
  padding: 0,
  borderRadius: "6px",
  overflow: "hidden",
  width: "auto",
};

const subheader = {
  fontWeight: "500",
  lineHeight: "1.125",
  fontFamily: "inherit",
};

const legalList = {
  display: "flex",
  gap: { xs: "16px", lg: "70px" },
  alignItems: "center",
  margin: "40px 0 0 0",
  padding: { xs: "0 0 0 24px", lg: "0" },
  width: "100%",
  whiteSpace: { xs: "nowrap", lg: "wrap" },
  flexWrap: { xs: "wrap", lg: "nowrap" },
  "& > li": {
    margin: 0,
    padding: 0,
    width: "auto",
  },
};

const copyright = {
  display: "flex",
  width: "100%",
  justifyContent: { xs: "flex-start", lg: "flex-end" },
  flex: "1 1",
  "& > p": {
    lineHeight: "1.43",
    opacity: 0.5,
    margin: 0,
    padding: 0,
    fontSize: "0.875rem",
  },
};

const footerContainer = {
  "& > div": {
    maxWidth: { xs: "100%", sm: "50%", lg: "25%" },
    flex: { xs: "100%", sm: "1 1 50%", lg: "1 1 25%" },
  },
};

export const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles}>
      <Container>
        <Grid container sx={footerContainer}>
          <Grid item xs={3}>
            <Image
              src="/images/logo_mono.svg"
              alt="Логотип облако знаний"
              width={241}
              height={100}
            />
          </Grid>
          <Grid item xs={3} sx={contacts}>
            <MuiLink href="tel:+74993220757" component={Link} sx={telLink}>
              +7 (499) 322-07-57
            </MuiLink>
            <MuiLink
              href="mailto:info@oblakoz.ru"
              component={Link}
              sx={footerLink}
            >
              info@oblakoz.ru
            </MuiLink>
            <Typography sx={caption}>Контактный центр</Typography>
            <Typography sx={address}>
              МО, г. Долгопрудный, Лихачевский проезд, 4, стр. 1
            </Typography>
          </Grid>
          <Grid item xs={3} sx={contacts}>
            <MuiLink href="tel:+74994300504" component={Link} sx={telLink}>
              +7 (499) 430-05-04
            </MuiLink>
            <MuiLink
              href="mailto:support@oblakoz.ru"
              component={Link}
              sx={footerLink}
            >
              support@oblakoz.ru
            </MuiLink>
            <Typography sx={caption}>Отдел заботы о пользователях</Typography>
          </Grid>
          <Grid item xs={3} sx={social}>
            <Typography component="h3" sx={subheader}>
              Следите за нами:
            </Typography>
            <List sx={listStyles}>
              <ListItem sx={itemStyles}>
                <MuiLink
                  sx={socialLink}
                  href="https://t.me/oblakoz"
                  target="_blank"
                >
                  <Box gap="8px" display="flex" alignItems="center">
                    <Image
                      src="/images/telegram_logo.svg"
                      alt="Группа телеграм облако знаний"
                      width={24}
                      height={24}
                    />
                    <Typography component="span" fontSize="0.875rem">
                      Телеграм
                    </Typography>
                  </Box>
                </MuiLink>
              </ListItem>
              <ListItem sx={itemStyles}>
                <MuiLink
                  sx={socialLink}
                  href="https://vk.com/oblakoz"
                  target="_blank"
                >
                  <Box gap="8px" display="flex" alignItems="center">
                    <Image
                      src="/images/vk_logo.svg"
                      alt="Группа вконтакте облако знаний"
                      width={24}
                      height={24}
                    />
                    <Typography component="span" fontSize="0.875rem">
                      ВКонтакте
                    </Typography>
                  </Box>
                </MuiLink>
              </ListItem>
              <ListItem sx={itemStyles}>
                <MuiLink
                  sx={socialLink}
                  href="https://dzen.ru/oblakoz"
                  target="_blank"
                >
                  <Box gap="8px" display="flex" alignItems="center">
                    <Image
                      src="/images/dzen_logo.svg"
                      alt="Дзен облако знаний"
                      width={24}
                      height={24}
                    />
                    <Typography component="span" fontSize="0.875rem">
                      Дзен
                    </Typography>
                  </Box>
                </MuiLink>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box>
          <List sx={legalList}>
            <ListItem>
              <MuiLink href="/" component={Link} sx={footerLink}>
                Политика конфиденциальности
              </MuiLink>
            </ListItem>
            <ListItem>
              <MuiLink href="/" component={Link} sx={footerLink}>
                Правила пользования сервисом
              </MuiLink>
            </ListItem>
            <ListItem sx={copyright}>
              <Typography>© ООО «Физикон Лаб», 2024</Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};
