package co.com.sofka.mentoring35.cardshuffle.controller;

import co.com.sofka.mentoring35.cardshuffle.collection.Card;
import co.com.sofka.mentoring35.cardshuffle.model.CardDTO;
import co.com.sofka.mentoring35.cardshuffle.model.PostRequestDTO;
import co.com.sofka.mentoring35.cardshuffle.repository.CardRepository;
import co.com.sofka.mentoring35.cardshuffle.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class CardController {

    private CardService cardService;

    @Autowired
    public CardController(CardService cardService){
        this.cardService = cardService;
    }

    @PostMapping("/card")
    public ResponseEntity<Mono<CardDTO>> generate(@RequestBody PostRequestDTO requestDTO){
        return new ResponseEntity<Mono<CardDTO>>(cardService.generate(requestDTO), HttpStatus.CREATED);
    }

    @GetMapping("/card")
    public ResponseEntity<Flux<CardDTO>> findAll(){
        return new ResponseEntity<Flux<CardDTO>>(cardService.get(), HttpStatus.OK);
    }

}
