package co.com.sofka.mentoring35;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/r")
public class RandomController {
     
    private RandomRepository randomRepository;
    
    @Autowired
    public RandomController(RandomRepository randomRepository) {
        this.randomRepository = randomRepository;
    }

    @PostMapping("")
    public Mono<Random> post(@RequestBody RequestDTO request) {
      
        var entity = new Random();
        entity.setDate(new Date());
        entity.setOrginalList(request.getList());
          //TODO: hacer que las lista sea random
        entity.setRandomList(request.getList());

        return  randomRepository.save(entity);
    }

    @GetMapping("")
    public Flux<Random> get() {
        return  randomRepository.findAll();
    }
}
