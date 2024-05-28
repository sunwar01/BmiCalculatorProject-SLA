FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["BmiCalculatorFrontend-SLA/BmiCalculatorFrontend-SLA.csproj", "BmiCalculatorFrontend-SLA/"]
RUN dotnet restore "BmiCalculatorFrontend-SLA/BmiCalculatorFrontend-SLA.csproj"
COPY . .
WORKDIR "/src/BmiCalculatorFrontend-SLA"
RUN dotnet build "BmiCalculatorFrontend-SLA.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BmiCalculatorFrontend-SLA.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BmiCalculatorFrontend-SLA.dll"]
