import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function RedditCards() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [dislikes, setDislikes] = useState([0, 0, 0]);
  const [userVotes, setUserVotes] = useState([0, 0, 0]);
  const [highlightedLike, setHighlightedLike] = useState(-1);
  const [highlightedDislike, setHighlightedDislike] = useState(-1);
  const [lastVote, setLastVote] = useState(null);

  const handleLikeClick = (index) => {
    if (lastVote === "v") {
      const newDislikes = [...dislikes];
      newDislikes[index] = Math.max(newDislikes[index] - 1, 0);
      setDislikes(newDislikes);
    }

    if (userVotes[index] !== 1 || lastVote !== "^") {
      const newLikes = [...likes];
      newLikes[index]++;
      setLikes(newLikes);
      setUserVotes((prevUserVotes) =>
        prevUserVotes.map((vote, i) => (i === index ? 1 : vote))
      );
      setLastVote("^");
    }
    setHighlightedLike(index);
  };

  const handleDislikeClick = (index) => {
    if (lastVote === "^") {
      const newLikes = [...likes];
      newLikes[index] = Math.max(newLikes[index] - 1, 0);
      setLikes(newLikes);
    }

    if (userVotes[index] !== -1 || lastVote !== "v") {
      const newDislikes = [...dislikes];
      newDislikes[index]++;
      setDislikes(newDislikes);
      setUserVotes((prevUserVotes) =>
        prevUserVotes.map((vote, i) => (i === index ? -1 : vote))
      );
      setLastVote("v");
    }
    setHighlightedDislike(index);
  };

  return (
    <Flex direction="row" align="center" justify="center">
      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden" mr="2">
        <Text fontSize="md" fontWeight="bold" mt="2" ml="2">This is the content of post 1.</Text>
        <Text fontSize="sm" color="gray.500" mt="2" ml="2">Hace 6 horas por the_big_mothergoose</Text>

        <Box p="4">
          <Flex align="center" justify="space-between">
            <Flex direction="column" align="center">
              <span onClick={() => handleLikeClick(0)} style={{ cursor: "pointer", color: userVotes[0] === 1 ? "orange" : "black" }}>^</span>
              <span>{likes[0]}</span>
              <span onClick={() => handleDislikeClick(0)} style={{ cursor: "pointer", color: userVotes[0] === -1 ? "orange" : "black" }}>v</span>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden" mr="2">
        <Text fontSize="md" fontWeight="bold" mt="2" ml="2">This is the content of post 2.</Text>
        <Text fontSize="sm" color="gray.500" mt="2" ml="2">Hace 3 horas por the_small_hummingbird</Text>

        <Box p="4">
          <Flex align="center" justify="space-between">
            <Flex direction="column" align="center">
              <span onClick={() => handleLikeClick(1)} style={{ cursor: "pointer", color: userVotes[1] === 1 ? "orange" : "black" }}>^</span>
              <span>{likes[1]}</span>
              <span onClick={() => handleDislikeClick(1)} style={{ cursor: "pointer", color: userVotes[1] === -1 ? "orange" : "black" }}>v</span>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Text fontSize="md" fontWeight="bold" mt="2" ml="2">This is the content of post 3.</Text>
        <Text fontSize="sm" color="gray.500" mt="2" ml="2">Hace 1 hora por the_cool_caterpillar</Text>

        <Box p="4">
          <Flex align="center" justify="space-between">
            <Flex direction="column" align="center">
              <span onClick={() => handleLikeClick(2)} style={{ cursor: "pointer", color: userVotes[2] === 1 ? "orange" : "black" }}>^</span>
              <span>{likes[2]}</span>
              <span onClick={() => handleDislikeClick(2)} style={{ cursor: "pointer", color: userVotes[2] === -1 ? "orange" : "black" }}>v</span>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
  }
export default RedditCards;