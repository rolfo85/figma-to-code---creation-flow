import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

export const LeftContainerByAnima = (): JSX.Element => {
  const [productType, setProductType] = React.useState("product");

  const handleProductTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    if (newValue !== null) {
      setProductType(newValue);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      flexGrow={1}
      alignSelf="stretch"
    >
      <Stack maxWidth={500} width="100%" spacing={5}>
        {/* Item details section */}
        <Stack spacing={2} width="100%">
          <Typography variant="h6" color="text.primary" fontWeight={500}>
            Item details
          </Typography>

          <ToggleButtonGroup
            value={productType}
            exclusive
            onChange={handleProductTypeChange}
            fullWidth
          >
            <ToggleButton
              value="product"
              sx={{
                height: 56,
                bgcolor:
                  productType === "product" ? "purple.100" : "background.paper",
                color:
                  productType === "product" ? "purple.600" : "text.primary",
                border:
                  productType === "product"
                    ? "2px solid #815af0"
                    : "1px solid #d7d5e4",
                borderRadius: "5px",
                "&.Mui-selected": {
                  bgcolor: "purple.100",
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {productType === "product" ? (
                  <Box
                    component="img"
                    src="https://c.animaapp.com/maa63q77uk1ttk/img/radio.svg"
                    alt="Radio"
                    width={19}
                    height={19}
                  />
                ) : (
                  <Box
                    width={16}
                    height={16}
                    borderRadius="100px"
                    border="2px solid #b1afc5"
                  />
                )}
                <Typography
                  variant="body2"
                  color={
                    productType === "product" ? "purple.600" : "text.primary"
                  }
                >
                  Product
                </Typography>
              </Box>
            </ToggleButton>
            <ToggleButton
              value="service"
              sx={{
                height: 56,
                bgcolor:
                  productType === "service" ? "purple.100" : "background.paper",
                color:
                  productType === "service" ? "purple.600" : "text.primary",
                border:
                  productType === "service"
                    ? "2px solid #815af0"
                    : "1px solid #d7d5e4",
                borderRadius: "5px",
                "&.Mui-selected": {
                  bgcolor: "purple.100",
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {productType === "service" ? (
                  <Box
                    component="img"
                    src="https://c.animaapp.com/maa63q77uk1ttk/img/radio.svg"
                    alt="Radio"
                    width={19}
                    height={19}
                  />
                ) : (
                  <Box
                    width={16}
                    height={16}
                    borderRadius="100px"
                    border="2px solid #b1afc5"
                  />
                )}
                <Typography
                  variant="body2"
                  color={
                    productType === "service" ? "purple.600" : "text.primary"
                  }
                >
                  Service
                </Typography>
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>

          <Stack spacing={1} width="100%">
            <Typography variant="body2" color="text.primary">
              Product name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                height: 48,
                "& .MuiOutlinedInput-root": {
                  height: 48,
                },
              }}
            />
          </Stack>

          <Stack spacing={3} width="100%">
            <Stack direction="row" spacing={2} width="100%">
              <Stack spacing={1} width="100%">
                <Typography variant="body2" color="text.primary">
                  Category
                </Typography>
                <Autocomplete
                  options={[]}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search or add a new category"
                      size="small"
                      sx={{
                        height: 48,
                        "& .MuiOutlinedInput-root": {
                          height: 48,
                        },
                      }}
                    />
                  )}
                />
              </Stack>
              <Stack spacing={1} width="100%">
                <Typography variant="body2" color="text.primary">
                  Brand
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 48,
                    "& .MuiOutlinedInput-root": {
                      height: 48,
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Inventory section */}
        <Stack spacing={2} width="100%">
          <Stack spacing={0.5} width="100%">
            <Typography variant="h6" color="text.primary" fontWeight={500}>
              Inventory
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add SKU, stock units to track inventory.
            </Typography>
          </Stack>

          <Stack spacing={3} width="100%">
            <Stack direction="row" spacing={2} width="100%">
              <Stack spacing={1} width="100%">
                <Typography variant="body2" color="text.primary">
                  SKU
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 48,
                    "& .MuiOutlinedInput-root": {
                      height: 48,
                    },
                  }}
                />
              </Stack>
              <Stack spacing={1} width="100%">
                <Typography variant="body2" color="text.primary">
                  Barcode
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 48,
                    "& .MuiOutlinedInput-root": {
                      height: 48,
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Stack>

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  padding: 0,
                  marginRight: 1,
                  "&.MuiCheckbox-root": {
                    color: "#b1afc5",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.primary">
                Track inventory for this product.
              </Typography>
            }
          />
        </Stack>

        {/* More options section */}
        <Stack spacing={2} width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            width="100%"
          >
            <Stack spacing={0.5}>
              <Typography variant="h6" color="text.primary" fontWeight={500}>
                More options
              </Typography>
              <Typography variant="body2" color="text.primary">
                Manage taxes, fees and shipping configurations.
              </Typography>
            </Stack>
            <IconButton size="small">
              <ExpandMore />
            </IconButton>
          </Box>

          <Stack spacing={3} width="100%">
            <Stack spacing={1} width="100%">
              <Typography variant="body2" color="text.primary">
                Tax exemption
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  height: 48,
                  "& .MuiOutlinedInput-root": {
                    height: 48,
                  },
                }}
              />
            </Stack>
          </Stack>

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  padding: 0,
                  marginRight: 1,
                  "&.MuiCheckbox-root": {
                    color: "#b1afc5",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.primary">
                Exempt shipping fee on this item
              </Typography>
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};
