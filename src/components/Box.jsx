import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const foods = [
  "Nasi Goreng",
  "Ayam Goreng",
  "Ayam Bakar",
  "Bubur",
  "Gudeg",
  "Warteg",
  "Sate",
  "Ketoprak",
];

export default function OutlinedCard() {
  const [randomFood, setRandomFood] = useState("");
  const [selectedFoods, setSelectedFoods] = useState([]);

  const getRandomFood = () => {
    const today = new Date().toLocaleDateString();
    const oneWeekFromToday = new Date();
    oneWeekFromToday.setDate(oneWeekFromToday.getDate() + 7);
    const selectedFoodsWithinWeek = selectedFoods.filter(
      (food) =>
        new Date(food.date) >= today && new Date(food.date) <= oneWeekFromToday
    );

    if (selectedFoodsWithinWeek.length === foods.length) {
      alert("Semua makanan sudah dipilih dalam seminggu ke depan!");
      return;
    }

    const availableFoods = foods.filter(
      (food) =>
        !selectedFoodsWithinWeek.find(
          (selectedFood) => selectedFood.name === food
        )
    );

    const randomIndex = Math.floor(Math.random() * availableFoods.length);
    const selectedFood = availableFoods[randomIndex];
    setRandomFood(selectedFood);
    setSelectedFoods([...selectedFoods, { name: selectedFood, date: today }]);
  };

  return (
    <Box
      sx={{
        maxWidth: "375px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Card
        variant="elevation"
        sx={{
          width: "100%",
          height: 250,
          marginTop: 40,
          borderRadius: 5,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            Selected Food: {randomFood}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={getRandomFood} size="small">
            Generate Food
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
