# Informações

## Iniciar o projeto dentro do emulador.

-- abrir o emulador
-- rodar npm run android

Depois de já ter feito o npm run android não é mais necessário rodar este comando e sim o comando abaixo:

```
npm run start
```

Toda vez que instalar algum pacote novo é necessário rodar novamente o comando para criar o aplicativo novamente.

```
npm run android
```

**Limpando o cache**

```
npm run start --reset-cache
```

## Configurando o esLint e o Prettier

Remover o .eslint do projeto e fazer uma nova instalação dele.

```
npm i --save-dev eslint
```

O debug pode desmarcar tanto o browser como o vscode.

### Configurar o prettier

```
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier babel-eslint
```

### Reactotron

```
npm i reactotron-react-native
```
Caso o Reactotron não aparecer nada tentar rodar no console do projeto

```
adb reverse tcp:9090 tcp:9090
```

O ADB só funciona se o SDK estiver nas variáveis de ambiente do Windows.

## Trabalhando com rotas

```
npm i react-navigation
```
Sempre olhar a [documentação](https://reactnavigation.org/docs/getting-started) pois a forma de instalar sempre muda.

Utilizando a [lib de stack](https://reactnavigation.org/docs/hello-react-navigation)

```
npm install @react-navigation/stack @react-native-community/masked-view react-native-safe-area-context
```

## Library para trabalhar com icons

```
npm i react-native-vector-icons
```
Acessar a [documentação](https://github.com/oblador/react-native-vector-icons) e validar configurações adicionais que são necessárias ser feitas tanto para Android como iOs

## Buttons

Utilizar a biblioteca: react-native-gesture-handler que possui vários tipos de botões já preparados para cada tipo de plataforma.

## Salvar dados no storage da aplicação

```
npm i @react-native-community/async-storage
```
