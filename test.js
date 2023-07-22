function parseCard(card) {
  // Helper function to parse the rank and suit from the card string
  const rank = card.substring(0, card.length - 1);
  const suit = card[card.length - 1];
  return { rank, suit };
}

function sortByRank(cards) {
  // Helper function to sort cards by rank (ascending order)
  return cards.sort((a, b) => {
    const rankOrder = "23456789TJQKA";
    const aRankIndex = rankOrder.indexOf(a.rank);
    const bRankIndex = rankOrder.indexOf(b.rank);
    return aRankIndex - bRankIndex;
  });
}

function sortBySuit(cards) {
  // Helper function to sort cards by suit (descending order)
  return cards.sort((a, b) => {
    const suitOrder = "SHDC";
    const aSuitIndex = suitOrder.indexOf(a.suit);
    const bSuitIndex = suitOrder.indexOf(b.suit);
    return bSuitIndex - aSuitIndex;
  });
}

function isFiveInARow(cards) {
  // Function to check if the given cards form a straight (five in a row)
  const ranks = "23456789TJQKA";

  for (let i = 1; i < cards.length; i++) {
    const currentRankIndex = ranks.indexOf(cards[i].rank);
    const prevRankIndex = ranks.indexOf(cards[i - 1].rank);

    if (currentRankIndex - prevRankIndex !== 1) {
      return false;
    }
  }

  return true;
}

function detectSet(cards) {
  // Function to detect the card set from the given cards
  const ranks = {};
  cards.forEach((card) => {
    // Count the occurrence of each rank
    ranks[card.rank] = (ranks[card.rank] || 0) + 1;
  });

  const pairs = [];
  const triples = [];

  Object.entries(ranks).forEach(([rank, count]) => {
    // Separate pairs and triples
    if (count === 2) {
      pairs.push({ rank });
    } else if (count === 3) {
      triples.push({ rank });
    }
  });

  const sortedBySuitCards = sortBySuit(cards);

  if (isFiveInARow(sortedBySuitCards)) {
    // Check if the cards form a straight (five in a row)
    return {
      set_name: "five in a row",
      cards: sortedBySuitCards.slice(0, 5).map((card) => card.rank + card.suit),
    };
  }

  if (triples.length > 0 && pairs.length > 0) {
    // Check if there is a triple and a pair
    const strongestTriple = sortByRank(triples).pop();
    const strongestPair = sortByRank(pairs).pop();
    return {
      set_name: "a triple and a pair",
      cards: [...triples, ...pairs].map((card) => card.rank + "H"),
    };
  }

  if (triples.length > 0) {
    // Check if there is a triple
    const strongestTriple = sortByRank(triples).pop();
    return {
      set_name: "triple",
      cards: [strongestTriple].map((card) => card.rank + "H"),
    };
  }

  if (pairs.length > 0) {
    // Check if there is a pair
    const strongestPair = sortByRank(pairs).pop();
    return {
      set_name: "pair",
      cards: [strongestPair].map((card) => card.rank + "H"),
    };
  }

  // If no other sets are found, it's a single card
  return {
    set_name: "single card",
    cards: [sortByRank(cards)[cards.length - 1].rank + sortBySuit(cards)[0].suit],
  };
}

function solution(cards) {
  // Parse the input cards
  const parsedCards = cards.map(parseCard);

  // Detect the card set
  const result = detectSet(parsedCards);

  // Filter out any cards that are not present in the input set
  result.cards = result.cards.filter((card) => cards.includes(card));

  return result;
}

// Test cases
console.log(solution(["2H", "4H", "7C", "9D", "10D", "KS"]));
console.log(solution(["AS", "10H", "8H", "10S", "8D"]));
console.log(solution(["AS", "JS", "AH", "AD", "10D", "AC"]));
console.log(solution(["6H", "7S", "8S", "9S", "10S", "JD", "JC", "KC", "AC"]));
console.log(solution(["2D", "4D", "6D", "8D", "9D", "AC", "KC", "QC", "JC", "7C"]));
console.log(solution(["10D", "10H", "10C", "2S", "2H", "2D", "JH", "JC"]));
