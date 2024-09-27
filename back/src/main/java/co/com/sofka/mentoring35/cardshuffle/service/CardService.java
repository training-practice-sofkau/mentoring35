package co.com.sofka.mentoring35.cardshuffle.service;

import co.com.sofka.mentoring35.cardshuffle.collection.Card;
import co.com.sofka.mentoring35.cardshuffle.model.CardDTO;
import co.com.sofka.mentoring35.cardshuffle.model.PostRequestDTO;
import co.com.sofka.mentoring35.cardshuffle.repository.CardRepository;
import co.com.sofka.mentoring35.cardshuffle.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CardService {

    @Autowired
    CardRepository cardRepository;

    public Mono<CardDTO> generate(PostRequestDTO requestDTO){
        return Mono.just(new Card())
                .map(card -> {
                    var suitList = Stream.of(requestDTO.getSuitList().split(","))
                            .collect(Collectors.toList());
                    var numberList = Stream.of(requestDTO.getNumberList().split(","))
                            .collect(Collectors.toList());
                    card.setCard(String.format("%s of %s",
                                    numberList.get(Utils.getRandomInt(0, numberList.size() -1)),
                                    suitList.get(Utils.getRandomInt(0, suitList.size() - 1))));
                    card.setDate(new Date());
                    return card;
                })
                .flatMap(cardRepository::save)
                .flatMap(card -> Mono.just(new CardDTO(card.getId(), card.getDate(), card.getCard())));
    }

    public Flux<CardDTO> get(){
        return cardRepository.findAll()
                .flatMap(card -> {
                    return Flux.just(new CardDTO(card.getId(), card.getDate(), card.getCard()));
                });
    }
}
