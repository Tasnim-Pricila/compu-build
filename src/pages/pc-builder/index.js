import MainLayout from "@/components/Layouts/MainLayout";
import processor from "../../assets/images/processor.jpg";
import { useAppSelector } from "@/redux/hook";
import PCBuildCard from "@/components/shared/PCBuildCard";
import { Button, message } from "antd";

const PCBuilder = () => {
  const {
    Processor,
    RAM,
    PowerSupplyUnit,
    Motherboard,
    StorageDevice,
    Monitor,
  } = useAppSelector((state) => state.pcBuild);

  return (
    <>
      <PCBuildCard
        image={processor}
        title={"CPU"}
        component={Processor}
        componentName={Processor?.name}
        componentModel={Processor?.keyFeatures?.model}
        componentPrice={Processor?.price}
        category={"Processor"}
      />
      <PCBuildCard
        image={processor}
        title={"Motherboard"}
        component={Motherboard}
        componentName={Motherboard?.name}
        componentModel={Motherboard?.keyFeatures?.model}
        componentPrice={Motherboard?.price}
        category={"Motherboard"}
      />
      <PCBuildCard
        image={processor}
        title={"RAM"}
        component={RAM}
        componentName={RAM?.name}
        componentModel={RAM?.keyFeatures?.model}
        componentPrice={RAM?.price}
        category={"RAM"}
      />
      <PCBuildCard
        image={processor}
        title={"Power Supply Unit"}
        component={PowerSupplyUnit}
        componentName={PowerSupplyUnit?.name}
        componentModel={PowerSupplyUnit?.keyFeatures?.model}
        componentPrice={PowerSupplyUnit?.price}
        category={"Power Supply Unit"}
      />
      <PCBuildCard
        image={processor}
        title={"Storage Device"}
        component={StorageDevice}
        componentName={StorageDevice?.name}
        componentModel={StorageDevice?.keyFeatures?.model}
        componentPrice={StorageDevice?.price}
        category={"Storage Device"}
      />
      <PCBuildCard
        image={processor}
        title={"Monitor"}
        component={Monitor}
        componentName={Monitor?.name}
        componentModel={Monitor?.keyFeatures?.model}
        componentPrice={Monitor?.price}
        category={"Monitor"}
      />

      <Button
        type="primary"
        style={{ margin: "20px 20px" }}
        onClick={() => message.success("Your PC build successfully")}
        disabled={
          !Object.keys(Processor).length ||
          !Object.keys(RAM).length ||
          !Object.keys(PowerSupplyUnit).length ||
          !Object.keys(Motherboard).length ||
          !Object.keys(StorageDevice).length ||
          !Object.keys(Monitor).length
        }
      >
        Complete Build
      </Button>
    </>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
