import Container from '@/components/Container';


const NexGen = () =>{

    return(
        <div className={"py-20"}>
          <Container>
            <h1 className={"text-2xl text-black"}>NexGen</h1>
            <h4 className={"text-gray-600"}><a href={"/nexgen/policy"}>NexGen policy</a></h4>
          </Container>
        </div>
    )

}

export default NexGen;