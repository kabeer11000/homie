const express = require('express');
// const {ChatGPTUnofficialProxyAPI} = require("chatgpt");
const app = express();
app.get('/', async (req, res) => {
    // @ts-ignore
    // const api = new ChatGPTUnofficialProxyAPI({
    //     accessToken: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..2tdL-godYNqIOoFq.DghWtpMDIDDKmI4i7ns28bcPbiLZEl8OpnmuCIxihdhe0_aPdoMF-evykU2qTQ-4DCTbJqogS79FWfxtIiSoKuUdKNouFqiOMZxNyE9DBx0DssbAV4tFqz_sxCJoe3a3utRuXLX-mexbDPOcH4gYE8NgJzM7ItiLyT_8IXaHJoi_B6_D2O7Mot55CkzwysbvpzLXcXMhhQtiUMjHa77BvcAkUJFlm8Q_zXHGrZHTHS7Hv9FyxpLuWoio7U5hqSruVI1V-ZwSRrFHdLQp39Xxd1q7BF6dRgQdiLpJv93feI7hf9OZmfrvHLfDfAVx5K270XQa-99bM5om7iqZRIA5cQNZS6YfXaI9GGil9PdvLhCBnn4gVF5uOsVI9WOzFJis_7as-QvOH64cg1QmB7AkMREgIgeDvG2IHZlgu94kUZnDjrOzW26nzrCAB2FT4uK85sJMZtvkYPm7UpZ-yxtN2is7eUFhHq0HG15x05WiuktI1OeTlI8GI2XtlkYu3FeD9UBSkTJc2OqHQGb2lS94U_imJ_Wt95Zq6I9Yxho_eurR7gL5gsHK4mLuXiMH3giMnPfv24zplbPDWlTvPA4SgNc4zuo-WshUnknWKi_D_y55vX4qEEGwuDQTZx9wRMsWmS08aGTzP2jTsudJud27x9Ue1cFApjyROU4cBnGiIrlWFCsOC-geAqLLQx1_7ZH0SPir8aoishKtkg9zrqYuxoeOcW4xo6nXQDllZpZOJyKOjuOdy_CP0h7kp_sT48YzHcSk6oM21bGVeOQq5139jIeGwW3q1sBhBfQ9cYaE3iVhmt8RVQ4R-q3Cw9gKEIUqNg0Xm6wfk3jpUlxX0xVsYRLC1BKOZglCYuLyqyOl1De6pkKpOgzlsFlESFQ0rumQgAjRxnmprjufJS5chbXwij4ktDPHlCSad8nF1DJGXDjslTY4mRsBxDxBsbiw5nj0KLHQoYxN-xNbFsqwL3FaaARkSVT8iMSSXolKybeLkYACMXPdkWatgnLp0zuxnBun9YxEVKekGKb-5Y54nfATlmSml3oGKa-lyzQh7Vca-zdrETJO_kmySUO3ihp-TbDJZihO47fXIfimqRHXfW2Rg7TKdbKCH-32LMljGRl7UsjO0dY86wViPzTbgtlppEp9OT06hvGHATj0zd4HDu4tYUHr58wqSnMBCv8SwVin7ds2jryqVzoxXSmFQw6ZZrJpZyKcYq8AIm_4EN2sCzy7f55yhTB130ThjOkKQM1u7W8j21NbtkL40-9WGURHlDn9GtTEX7Ix5WOLzOdWzIE7n2K0tgcuaYlK9MH1vPSZuULHxNVXikTxKQgd0LVfBfpXs34guvNhhGXNk5qU2w5oIGpQronvKazJZ8aAEHMbh3tvy2uTyxhnrqM8rv8qpDdff7Je-MmF2V_2C-sUxW1-P4vKFuz7Pzcjn2w2hs5tETMVM7XlibgXfZWSwxkLM-5XHRVE6I6zhk0yaZwa_hExxaj_0Ti10l8lKxY4t1BHc-JmvCAPpwX1dr36wANuhVXQC95vSg1bahGB6mVPGxtPus6NgHELA0OgrKWeomvlOX_PaIbIBiggCzrta3paY55HlE9iwS1dMo7GxRvkJV83J1wa2bYGDWn2_TejE-rQI-KA7lc2sRx89VS_6vOe_Aq58Uax7wvRIHSyzHitZPOiSOLsukemz7f3Fb0LsIITM1f0C7fuSM4VXtXo-kC-gXSC3cV_doOMhE5ZoW7Tpik1z7ZSCyUJoJQA-an2ZbZRo6zjVuU270xlgDJ-u0SKC8U09659NCRUNM6j9CSy2esN4X4lZVSTgBtBsM1jgbTI7pqmKsAmcuk0PW_VEliqtQneYhMo2x_6oek_Dcb-5nmZd8CqtUbpqs-Tof2zDGQEwd4pioIjJv33U0u03OdymDVdJDg0Crxo_dl0kBNEcHgpH_26N_O6Y4OaxJnhB6LSVLEoU8JAWjkcAnauWIulowWInc5-m6arUW177bU0zSvCLcSiTp_HKKvI-sKdtmYvburRNvuzoHKu9CLRp68FA6o3NTLgs2U3EJn59L4BzrVfI_EMYQmL7KO3zwdFwzRkeAGveyWAn0vOoQ_8Qekb0WhLpAuQ7XVXKiV39RrdHW7YtjL3ZWMzY1uDO2msGk7R8GeJ8uZwt7VXEfoGhxB-SXwp6-f2S4sFYFAkX_Cbrgs68Y1cLa0epxHmuQmO91VJ3jzXuhiQP91Kx5Qs_btR__3-obamf9uT0yTDHJYK-hRc5t6TaXOEr7ep-rvi46yQHIJnifbSgDGCxtc4wrLOVFLjLWzAoHzoZHw13U-lm-_CeMBWsaPV8QtumY4kxBmt4p8_DTaE2YFar0U41LyWAubQtXzBfj3990ZQZms53uQgOz11s38QKa5XIoeeKdAZMpjEhldxng4wUTMY1VYq3t-voJiKXu6EB1rvukjXUwhFcqjg_9QhBb3nkamURu51QqUTzZLpOtkTfj91dy8Q84bTXADUBesjHgUAFAjEkJK2ayar-eAGyBhEUg1dmA.Y3Yd9fh5YNgWsvQEvkAkMg",
    //     apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',
    // })
    // res.json((await api.sendMessage('Hello World!')).text)


    const clientOptions = {
        // (Optional) Support for a reverse proxy for the completions endpoint (private API server).
        // Warning: This will expose your `openaiApiKey` to a third party. Consider the risks before using this.
        // reverseProxyUrl: 'https://chatgpt.hato.ai/completions',
        // (Optional) Parameters as described in https://platform.openai.com/docs/api-reference/completions
        modelOptions: {
            // You can override the model name and any other parameters here, like so:
            model: 'gpt-3.5-turbo',
            // I'm overriding the temperature to 0 here for demonstration purposes, but you shouldn't need to override this
            // for normal usage.
            temperature: 0,
            // Set max_tokens here to override the default max_tokens of 1000 for the completion.
            // max_tokens: 1000,
        },
        // (Optional) Davinci models have a max context length of 4097 tokens, but you may need to change this for other models.
        // maxContextTokens: 4097,
        // (Optional) You might want to lower this to save money if using a paid model like `text-davinci-003`.
        // Earlier messages will be dropped until the prompt is within the limit.
        // maxPromptTokens: 3097,
        // (Optional) Set custom instructions instead of "You are ChatGPT...".
        // promptPrefix: 'You are Bob, a cowboy in Western times...',
        // (Optional) Set a custom name for the user
        // userLabel: 'User',
        // (Optional) Set a custom name for ChatGPT
        // chatGptLabel: 'ChatGPT',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    };

    const cacheOptions = {
        // Options for the Keyv cache, see https://www.npmjs.com/package/keyv
        // This is used for storing conversations, and supports additional drivers (conversations are stored in memory by default)
        // For example, to use a JSON file (`npm i keyv-file`) as a database:
        // store: new KeyvFile({ filename: 'cache.json' }),
    };

    const chatGptClient = new ChatGPTClient('OPENAI_API_KEY', clientOptions, cacheOptions);

    let response;
    response = await chatGptClient.sendMessage('Hello!');
    console.log(response); // { response: 'Hello! How can I assist you today?', conversationId: '...', messageId: '...' }

    response = await chatGptClient.sendMessage('Write a short poem about cats.', { conversationId: response.conversationId, parentMessageId: response.messageId });
    console.log(response.response); // Soft and sleek, with eyes that gleam,\nCats are creatures of grace supreme.\n...
    console.log();

    response = await chatGptClient.sendMessage('Now write it in French.', {
        conversationId: response.conversationId,
        parentMessageId: response.messageId,
        // If you want streamed responses, you can set the `onProgress` callback to receive the response as it's generated.
        // You will receive one token at a time, so you will need to concatenate them yourself.
        onProgress: token => process.stdout.write(token),
    });
    console.log();
    console.log(response.response); // Doux et élégant, avec des yeux qui brillent,\nLes chats sont des créatures de grâce suprême.\n...

    response = await chatGptClient.sendMessage('Repeat my 2nd message verbatim.', {
        conversationId: response.conversationId,
        parentMessageId: response.messageId,
        // If you want streamed responses, you can set the `onProgress` callback to receive the response as it's generated.
        // You will receive one token at a time, so you will need to concatenate them yourself.
        onProgress: token => process.stdout.write(token),
    });
    console.log();
    console.log(response.response); // "Write a short poem about cats."
})
app.listen(3001, () => console.log("app listening"))
