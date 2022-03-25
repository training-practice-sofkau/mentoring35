package co.com.sofka.mentoring35.cardshuffle.service;

import co.com.sofka.mentoring35.cardshuffle.collection.Card;
import co.com.sofka.mentoring35.cardshuffle.model.PostRequestDTO;
import co.com.sofka.mentoring35.cardshuffle.repository.CardRepository;
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

    public Mono<Card> generate(PostRequestDTO requestDTO){
        return Mono.just(new Card())
                .map(card -> {
                    card.setDate(new Date());
                    return card;
                })
                .map(card -> {
                    var suitList = Stream.of(requestDTO.getSuitList().split(","))
                            .collect(Collectors.toList());
                    var numberList = Stream.of(requestDTO.getNumberList().split(","))
                            .collect(Collectors.toList());
                    card.setCard(String.format("%s of %s",
                                    numberList.get(getRandomInt(0, numberList.size() -1)),
                                    suitList.get(getRandomInt(0, suitList.size() - 1))));
                    return card;
                })
                .flatMap(cardRepository::save);
    }

    public Flux<Card> get(){
        return cardRepository.findAll();
    }

    private int getRandomInt(int min, int max){
        return min + (int)(Math.random() * ((max - min) + 1));
    }
}
