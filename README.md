'''

# Azure Container Apps Deployment Guide

    This guide provides instructions on how to deploy the application to Azure Container Apps.

    ## Prerequisites

    1.  An Azure subscription. If you don't have one, you can create a free account.
    2.  The Azure CLI installed on your local machine. You can install it from [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
    3.  Docker installed on your local machine. You can install it from [here](https://docs.docker.com/get-docker/).

    ## Steps

    1.  **Create a Dockerfile:**

        Create a `Dockerfile` in the root directory of your project. This file will contain the instructions to build a Docker image for your application.

        ```dockerfile
        FROM node:18-alpine

        WORKDIR /app

        COPY package*.json ./

        RUN npm install

        COPY . .

        EXPOSE 3000

        CMD ["npm", "run", "dev"]
        ```

        **Note:** Adjust the `EXPOSE` port and `CMD` command according to your application's needs.  If you are using Vite, you might want to build the application first and serve the static files.  In that case, you would use a multi-stage Dockerfile.  Here's an example:

        ```dockerfile
        # Stage 1: Build the application
        FROM node:18-alpine AS builder

        WORKDIR /app

        COPY package*.json ./

        RUN npm install

        COPY . .

        RUN npm run build

        # Stage 2: Serve the static files using a lightweight server
        FROM nginx:alpine

        COPY --from=builder /app/dist /usr/share/nginx/html

        EXPOSE 80

        CMD ["nginx", "-g", "daemon off;"]
        ```

        This multi-stage Dockerfile first builds the application using Node.js and then serves the static files using Nginx.  Make sure to adjust the paths according to your `vite.config.js` file.  Also, you will need to change the `EXPOSE` port to 80.

    2.  **Build the Docker image:**

        Open a terminal in the root directory of your project and run the following command to build the Docker image:

        ```bash
        docker build -t <your-image-name> .
        ```

        Replace `<your-image-name>` with a name for your Docker image.  For example, `my-app`.

    3.  **Push the Docker image to a container registry:**

        You need to push the Docker image to a container registry so that Azure Container Apps can access it. You can use Azure Container Registry, Docker Hub, or any other container registry.

        *   **Azure Container Registry:**

            If you want to use Azure Container Registry, you need to create one first. You can do this using the Azure portal or the Azure CLI.

            ```bash
            az acr create --name <your-acr-name> --resource-group <your-resource-group> --sku Basic
            ```

            Replace `<your-acr-name>` with a name for your Azure Container Registry and `<your-resource-group>` with the name of your resource group.

            After the registry is created, you need to log in to it using the Azure CLI.

            ```bash
            az acr login --name <your-acr-name>
            ```

            Then, tag the Docker image with the registry's login server.

            ```bash
            docker tag <your-image-name> <your-acr-name>.azurecr.io/<your-image-name>
            ```

            Finally, push the Docker image to the registry.

            ```bash
            docker push <your-acr-name>.azurecr.io/<your-image-name>
            ```

        *   **Docker Hub:**

            If you want to use Docker Hub, you need to log in to your Docker Hub account using the Docker CLI.

            ```bash
            docker login
            ```

            Then, tag the Docker image with your Docker Hub username.

            ```bash
            docker tag <your-image-name> <your-dockerhub-username>/<your-image-name>
            ```

            Finally, push the Docker image to Docker Hub.

            ```bash
            docker push <your-dockerhub-username>/<your-image-name>
            ```

    4.  **Create an Azure Container App:**

        You can create an Azure Container App using the Azure portal or the Azure CLI.

        ```bash
        az containerapp create --name <your-container-app-name> --resource-group <your-resource-group> --image <your-image-name> --environment <your-container-app-environment>
        ```

        Replace `<your-container-app-name>` with a name for your Azure Container App, `<your-resource-group>` with the name of your resource group, `<your-image-name>` with the name of your Docker image (including the registry), and `<your-container-app-environment>` with the name of your Azure Container Apps environment.  If you don't have an environment, you can create one.

        ```bash
        az containerapp env create --name <your-container-app-environment> --resource-group <your-resource-group> --location <your-location>
        ```

        Replace `<your-container-app-environment>` with a name for your environment, `<your-resource-group>` with the name of your resource group, and `<your-location>` with the location where you want to create the environment.

    5.  **Configure the Azure Container App:**

        You may need to configure the Azure Container App to expose it to the internet. You can do this by creating an ingress.

        ```bash
        az containerapp ingress enable --name <your-container-app-name> --resource-group <your-resource-group> --target-port 3000 --exposed-port 80 --type External
        ```

        Replace `<your-container-app-name>` with the name of your Azure Container App, `<your-resource-group>` with the name of your resource group, and adjust the ports according to your application's needs.

    ## Conclusion

    You have now deployed the application to Azure Container Apps. You can access the application by opening the URL of the Azure Container App in your browser.


'''