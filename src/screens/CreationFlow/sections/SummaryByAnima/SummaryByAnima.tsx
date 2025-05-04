import ReceiptIcon from "@mui/icons-material/Receipt";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

export const SummaryByAnima = (): JSX.Element => {
  // Data for the summary panel
  const productData = {
    name: "Premium paw dog food",
    price: "$0.00",
    description:
      "Premium Paws Gourmet Blend is made with only the finest, all-natural ingredie",
    category: "Dog food",
    brandName: "Premium paws",
    taxStatus: "Fully taxable",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "566px" },
        height: "100%",
        padding: 4,
        bgcolor: "background.paper",
        borderLeft: 1,
        borderColor: "divider",
        overflowY: "auto",
      }}
    >
      <Stack spacing={3} width="100%" height="100%">
        <Typography
          variant="subtitle2"
          align="center"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          ITEM SUMMARY
        </Typography>

        <Paper
          elevation={0}
          sx={{
            padding: 3,
            borderRadius: "10px",
            background:
              "linear-gradient(171deg, rgba(250,239,255,1) 0%, rgba(239,239,255,1) 100%)",
          }}
        >
          <Stack spacing={3} alignItems="center" width="100%">
            <Stack spacing={1} alignItems="center" width="200px">
              <Chip
                label="Selling price"
                size="small"
                sx={{
                  bgcolor: "purple.200",
                  color: "purple.600",
                  borderRadius: "45px",
                  fontWeight: 500,
                }}
              />
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {productData.price}
              </Typography>
            </Stack>

            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 2,
                width: "100%",
                borderRadius: "5px",
                bgcolor: "background.paper",
                border: 1,
                borderColor: "#f8f8fe",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "purple.500",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://c.animaapp.com/maa63q77uk1ttk/img/initials.png"
                  alt="Initials"
                  sx={{ width: 20, height: 11 }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ flexGrow: 1, color: "text.primary", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              >
                {productData.name}
              </Typography>
            </Paper>
          </Stack>
        </Paper>

        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Description
              </Typography>
              <Typography 
                variant="body2"
                sx={{ 
                  wordBreak: "break-word",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {productData.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Divider />
          <Stack spacing={0} sx={{ pt: 2 }}>
            {[
              { label: "Category", value: productData.category },
              { label: "Brand name", value: productData.brandName },
              { 
                label: (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <ReceiptIcon fontSize="small" />
                    <Typography variant="body2" color="text.primary">
                      Taxes
                    </Typography>
                  </Stack>
                ), 
                value: productData.taxStatus 
              }
            ].map((item, index, array) => (
              <React.Fragment key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
                  <Box sx={{ flexShrink: 0, width: '40%' }}>
                    {typeof item.label === 'string' ? (
                      <Typography variant="body2" color="text.primary">
                        {item.label}
                      </Typography>
                    ) : (
                      item.label
                    )}
                  </Box>
                  <Box sx={{ flexGrow: 1, maxWidth: '60%', textAlign: 'right' }}>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
                {index < array.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Stack>
        </Box>

        <Paper
          elevation={0}
          sx={{
            mt: "auto",
            p: 2,
            border: 1,
            borderColor: "divider",
            borderRadius: "5px",
          }}
        >
          <Stack spacing={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Availability
              </Typography>
              <Switch defaultChecked />
            </Box>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Item available. Disable the toggle when the item is unavailable or
              out of stock.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};
