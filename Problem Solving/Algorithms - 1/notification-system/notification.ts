abstract class notification {
    constructor(
        protected sender: string,
        protected message: string
    ) { }

    // Function to be override by all other classes
    abstract send(): void;
}

export default notification;