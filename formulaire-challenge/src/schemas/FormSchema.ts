const schema = {
  type: "object",
  properties: {
    countryPercentages: {
      type: "array",
      items: {
        type: "object",
        properties: {
          country: {
            type: "string",
            enum: ["France 50%", "Belgique 20%", "Allemagne 10%", "Inconnu 20%"],
          },
          percentage: {
            type: "number",
            maximum: 100,
            minimum: 0,
          },
        },
        required: ["country", "percentage"],
      },
    },
  },
};

export default schema;
